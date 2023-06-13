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
    <div>
        <h4>User Manager</h4>
            
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                </tr>
            </thead>
            <tbody>
                <li v-for="item in users">
                    <tr>
                        <td>{{ item.name }}</td>
                        <td>{{ item.role }}</td>
                    </tr>
                </li>
            </tbody>
        </table>
    </div>
</template>

<style scoped>

th, td {
    border: 1px solid black;
}

</style>
