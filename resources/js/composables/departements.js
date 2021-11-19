import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useDepartements() {
    const departements = ref([])
    const departement = ref([])
    const router = useRouter()
    const errors = ref('')

    const getDepartements = async () => {
        let response = await axios.get('/api/departements')
        departements.value = response.data.data
    }

    const getDepartement = async (id) => {
        let response = await axios.get(`/api/departements/${id}`)
        departement.value = response.data.data
    }

    const storeDepartement = async (data) => {
        errors.value = ''
        try {
            await axios.post('/api/departements', data)
            await router.push({ name: 'departements.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        }

    }

    const updateDepartement = async (id) => {
        errors.value = ''
        try {
            await axios.put('/api/departements/' + id, departement.value)
            await router.push({ name: 'departements.index' })
        } catch (e) {
            if (e.response.status === 422) {
                for (const key in e.response.data.errors) {
                    errors.value += e.response.data.errors[key][0] + ' ';
                }
            }
        } 
    }
    const destroyDepartement = async (id) => {
        await axios.delete('/api/departements/' + id)
    }
 
    return {
        departements,
        departement,
        errors,
        getDepartements,
        getDepartement,
        storeDepartement,
        updateDepartement,
        destroyDepartement
    }
}