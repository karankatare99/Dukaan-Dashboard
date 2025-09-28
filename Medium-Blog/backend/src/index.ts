import { Hono } from 'hono'
import user from './routes/userRoutes'
import blog from './routes/blogRoutes'
import { cors } from 'hono/cors'

const app = new Hono().basePath('/api/v1')
app.use(cors())

app.route('/user', user)
app.route('/blog', blog)

export default app
