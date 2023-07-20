import api from '../api/axios'

export async function verifyToken(token: string) {
    try {
        return await api.post("api/verify", null, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            if (res.status === 200) {
                return true
            }
        }).catch(() => {
            return false;
        })
    } catch (error) {
        return false;
    }
}