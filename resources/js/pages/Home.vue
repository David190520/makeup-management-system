<template>
    <div class="home">
        <h1>
            Makeup Management System
        </h1>
        <p>
            Welcome! This is the home page of the Makeup Management System. Use the navigation menu to explore different sections of the application.
        </p>
    </div>
</template>

<script>

import { useAuthStore } from '../stores/auth';
const authStore = useAuthStore();

</script>