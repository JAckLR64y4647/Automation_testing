export default class MatrixMock {
  constructor(n) {
    this.rows = n;
    this.cols = n + 1;
    this.matrix = Array.from({ length: n }, () => Array(n + 1).fill(0));
  }

  get_rows() {
    return this.rows;
  }

  get_cols() {
    return this.cols;
  }

  mull_add(i, j, d) {
    console.log(`mull_add called with i=${i}, j=${j}, d=${d}`);
  }

  exists_wrong_row() {
    return false;
  }

  exists_zero_row() {
    return true;
  }

  swap_with_nonzero_row(i) {
    console.log(`swap_with_nonzero_row called for row ${i}`);
  }

  get(i, j) {
    return this.matrix[i][j];
  }

  set(i, j, d) {
    this.matrix[i][j] = d;
  }
}
