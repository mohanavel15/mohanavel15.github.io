const std = @import("std");
const evalChildProcess = std.Build.Step.evalChildProcess;

pub fn deploy(b: *std.Build) void {
    const deploy_step = b.step("deploy", "Deploys to gh pages");
    deploy_step.makeFn = gh_pages;
}

fn gh_pages(step: *std.Build.Step, _: std.Build.Step.MakeOptions) anyerror!void {
    const allocator = step.owner.allocator;

    try execute_cmd(step, "git checkout --orphan gh-pages", allocator);
    try execute_cmd(step, "git rm -rf .", allocator);
    try execute_cmd(step, "mv zig-out/* .", allocator);
    try execute_cmd(step, "echo .zig-cache > .gitignore", allocator);
    try execute_cmd(step, "echo zig-out >> .gitignore", allocator);
    try execute_cmd(step, "git add .", allocator);
    try execute_cmd(step, "git commit -m \"deploy_to_gh-pages\"", allocator);
    try execute_cmd(step, "git checkout main", allocator);
}

fn execute_cmd(step: *std.Build.Step, cmd: []const u8, allocator: std.mem.Allocator) !void {
    var iter = std.mem.splitAny(u8, cmd, " ");

    var argv_list = std.ArrayList([]const u8).init(allocator);
    defer argv_list.deinit();

    while (iter.next()) |c| {
        try argv_list.append(c);
    }

    const argv = try argv_list.toOwnedSlice();
    const result = try evalChildProcess(step, argv);
    std.debug.print("{s}\n", .{result});
}
