import { makeAutoObservable } from "mobx";
import axios from "axios";

class UserStore {
  users = [];
  isLoading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchUsers() {
    this.isLoading = true;
    this.error = null;
    try {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      this.users = response.data.results;
    } catch (error) {
      this.error = "Failed to fetch users.";
    } finally {
      this.isLoading = false;
    }
  }
}

const userStore = new UserStore();
export default userStore;
