import { initializeApp, getApps, cert, ServiceAccount } from 'firebase-admin/app';
import { serviceAccount } from '@/firebaseAdminConfig'

const firebaseAdminConfig = {
    credential: cert(serviceAccount as ServiceAccount)
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}
