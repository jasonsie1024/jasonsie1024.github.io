// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Jason 的日常雜記";
export const SITE_DESCRIPTION = "";

// 線上 CI (GitHub Actions) 部署時嚴格過濾草稿；本地環境（本機預覽）保留草稿方便查看效果
export const filterDrafts = ({ data }: { data: { draft?: boolean } }) => {
	const isCI = Boolean(process.env.CI);
	return isCI ? !data.draft : true;
};
