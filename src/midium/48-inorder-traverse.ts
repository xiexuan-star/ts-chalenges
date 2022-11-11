{
  // Implement the type version of binary tree inorder traversal.

  // For example:

  const tree1 = {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  } as const;

  type A = InorderTraversal<typeof tree1> // [1, 3, 2]

  type InorderTraversal<T, Res extends number[] = []> = T extends { val: infer V, left: infer L, right: infer R } ? [...Res, ...InorderTraversal<L, Res>, V, ...InorderTraversal<R, Res>] : Res;
}
