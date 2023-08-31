class Category {
  public id: string;
  public name: string;
  public parentId: string | null;
  public children: Category[] | null;

  constructor(id: string, name: string, parentId: string | null, children: Category[] | null) {
    this.id = id;
    this.name = name;
    this.parentId = parentId;
    this.children = children;
  }

  public appendChild(node: Category): void {
    if (this.children === null) {
      this.children = [node];
    } else {
      this.children.push(node);
    }
  }
}

export default Category;
