import { writable, type Writable } from "svelte/store";

class Watcher {
  readonly state: Writable<boolean>;
  constructor() {
    this.state = writable(false);
  }
}
export default new Watcher();
