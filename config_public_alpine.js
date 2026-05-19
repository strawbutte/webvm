// The root filesystem location
export const diskImageUrl = "wss://disks.webvm.io/alpine_20251007.ext2";
// The root filesystem backend type
export const diskImageType = "cloud";
// Print an introduction message about the technology
export const printIntro = false;
// Is a graphical display needed
export const needsDisplay = true;
// Executable full path (Required)
export const cmd = "/bin/login";
// Arguments, as an array (Required)
export const args = ["-f", "user"];
// Optional extra parameters
export const opts = {
	// User id (using non-root user for personal use)
	uid: 1000,
	// Group id
	gid: 1000,
	// Set a custom env variable so I can tell I'm running inside webvm
	env: ["WEBVM=1", "TERM=xterm-256color", "HOME=/home/user", "USER=user", "EDITOR=nano", "PAGER=less"]
};
