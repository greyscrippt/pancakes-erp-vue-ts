<script lang='ts'>
export default {
    data() {
        return {
            users: [
                { name: "Michelle Angello", role: 'Admin' },
                { name: "Michelle Angello", role: 'Admin' },
            ],
        }
    }
}
</script>

<template>
    <div class='usermanager'>
        <h4>User Manager</h4>
            
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in users">
                    <td>{{ item.name }}</td>
                    <td>{{ item.role }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

th, td {
    border: 1px solid black;
}

.usermanager {
    padding: 50px;
}

</style>
