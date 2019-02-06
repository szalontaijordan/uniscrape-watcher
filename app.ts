import fetch from 'node-fetch';
import { CronJob } from 'cron';

new CronJob('0 */1 * * * *', async () => {
    const response = await fetch('https://yesno.wtf/api');
    const json = await response.json();
    console.log('[' + new Date().toJSON() + ']: ' + json.image);
}).start();
