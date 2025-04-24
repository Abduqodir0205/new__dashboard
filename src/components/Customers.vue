<template>
  <div class="container">
    <div class="header">
      <h1 class="title">Total: {{ totalUsers }} customers</h1>
      <div class="controls">
        <div class="sort-control">
          <span class="sort-label">Sort by:</span>
          <select v-model="sortBy" @change="sortUsers" class="sort-select">
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="dateCreated">Date Created</option>
          </select>
        </div>
        
      </div>
    </div>

    <div class="table-container">
      <table class="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="user-row">
            <td>
              <div class="user-info">
                <div class="avatar">
                  <img
                    :src="user.avatar"
                    alt=""
                  />
                </div>
                <div class="user-name">{{ user.name }}</div>
              </div>
            </td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
            <td>
              <button class="edit-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  <path d="m15 5 4 4" />
                </svg>
              </button>
            </td>
          </tr>
          <tr v-if="loading">
            <td colspan="5" class="loading-message">Loading...</td>
          </tr>
          <tr v-if="!loading && users.length === 0">
            <td colspan="5" class="empty-message">No users found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="load-more-container" v-if="hasMoreUsers">
      <button @click="loadMore" class="load-more-button" :disabled="loading">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Deanna Annis",
          email: "deannaannis@gmail.com",
          phone: "999-999-9999",
          address: "475 Spruce Drive, Pittsburgh, PA 23",
          avatar: "../assets/images/png/Avatar.png",
        },
        
        {
          id: 2,
          name: "Deanna Annis",
          email: "deannaannis@gmail.com",
          phone: "999-399-9999",
          address: "412 Spruce Drive, Pittsburgh, PA 23",
          avatar: "../assets/images/png/Avatar.png",
        },
        
      ],
      totalUsers: 0,
      currentPage: 1,
      pageSize: 10,
      loading: false,
      hasMoreUsers: true,
      sortBy: "dateCreated",
      sortDirection: "desc",
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      this.loading = true;
      try {
        // Replace with your actual API endpoint
        const response = await fetch(
          `https://api.example.com/users?page=${this.currentPage}&limit=${this.pageSize}&sort=${this.sortBy}&order=${this.sortDirection}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data = await response.json();

        // Assuming the API returns { users: [...], total: number }
        this.users = [...this.users, ...data.users];
        this.totalUsers = data.total;

        // Check if there are more users to load
        this.hasMoreUsers = this.users.length < this.totalUsers;
      } catch (error) {
        console.error("Error fetching users:", error);
        // Handle error state here
      } finally {
        this.loading = false;
      }
    },
    loadMore() {
      this.currentPage += 1;
      this.fetchUsers();
    },
    sortUsers() {
      // Reset users and fetch with new sort
      this.users = [];
      this.currentPage = 1;
      this.fetchUsers();
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.title {
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

.controls {
  display: flex;
  align-items: center;
  gap: 16px;
}

.sort-control {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sort-label {
  font-size: 14px;
  color: #666;
}

.sort-select {
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px 8px;
  font-size: 14px;
  background-color: white;
}

.filter-button {
  display: flex;
  align-items: center;
  gap: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px 12px;
  background-color: white;
  cursor: pointer;
  font-size: 14px;
}

.filter-button:hover {
  background-color: #f9f9f9;
}

.table-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.users-table {
  width: 100%;
  border-collapse: collapse;
}

.users-table th {
  text-align: left;
  padding: 12px 16px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: #666;
  background-color: #f9f9f9;
  border-bottom: 1px solid #eee;
}

.users-table td {
  padding: 16px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #333;
}

.user-row:hover {
  background-color: #f9f9f9;
}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-name {
  font-weight: 500;
}

.edit-button {
  background: none;
  border: none;
  cursor: pointer;
  color: #2563eb;
}

.edit-button:hover {
  color: #1d4ed8;
}

.loading-message,
.empty-message {
  text-align: center;
  padding: 24px;
  color: #666;
}

.load-more-container {
  text-align: center;
  margin-top: 16px;
}

.load-more-button {
  background: none;
  border: none;
  color: #2563eb;
  font-size: 14px;
  padding: 8px 16px;
  cursor: pointer;
}

.load-more-button:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

.load-more-button:disabled {
  color: #999;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .controls {
    width: 100%;
    justify-content: space-between;
  }

  .users-table {
    display: block;
    overflow-x: auto;
  }
}
</style>
