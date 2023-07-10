export const AllRepoList = class {
  constructor({ id,name, private:isPrivate, git_url ,created_at,updated_at,visibility,html_url}) {
    this.id = id;
    this.projectName = name;
    this.isPrivateRepo = isPrivate;
    this.gitCloneURL = git_url;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
    this.visibility = visibility;
    this.htmlURL = html_url;
  }
};
