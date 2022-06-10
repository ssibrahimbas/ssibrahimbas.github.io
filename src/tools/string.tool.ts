export class StringTool {
  static splitAndAdd(str: string, index: number, add: string): string {
    return str.slice(0, index) + add + str.slice(index);
  }
  static split(str: string, index: number): string {
    return str.slice(0, index) + str.slice(index + 1);
  }
}
