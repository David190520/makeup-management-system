import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false
    }),
    actions: {
        async login(credentials) {
            // get CSRF cookie
            await axios.get('/sanctum/csrf-cookie')

            // attempt login
            await axios.post('/login', credentials)

            // get user data
            await this.getUser()
        },

        async getUser() {
            try {
                const response = await axios.get('/api/user')
                this.user = response.data
                this.isAuthenticated = true
            } catch (error) {
                this.user = null
                this.isAuthenticated = false
            }
        },

        async logout() {
            await axios.post('/logout')
            this.user = null
            this.isAuthenticated = false
        }
    }
})