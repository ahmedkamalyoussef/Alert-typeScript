import { Ban, BellRing, CheckCheck, Shield, TriangleAlert } from 'lucide-react'
import Alert from './Alert/Alert'

function index() {
    const description = `Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Porro quos excepturi iure asperiores voluptatum,
        id dolor saepe doloremque cumque delectus molestiae ullam cupiditate facere nam distinctio molestias, nihil dolore mollitia!
        id dolor saepe doloremque cumque delectus molestiae ullam cupiditate facere nam distinctio molestias, nihil dolore mollitia!`
    return (
        <>
            <Alert type='err' icon={<Ban />} title='alert one' description={description} />
            <Alert type='info' icon={<BellRing />} title='alert two' >
            <>
            Lorem ipsum dolor sit amet consectetur,<a href="/"> Link </a> 
                adipisicing elit. Porro quos excepturi iure asperiores voluptatum,
                adipisicing elit. Porro quos excepturi iure asperiores voluptatum,
                id dolor saepe doloremque cumque delectus molestiae ullam cupiditate facere nam distinctio molestias, nihil dolore mollitia!
                id dolor saepe doloremque cumque delectus molestiae ullam cupiditate facere nam distinctio molestias, nihil dolore mollitia!
            </>
            </Alert>
            <Alert type='warn' icon={<TriangleAlert />} title='alert three' description={description} />
            <Alert type='success' icon={<CheckCheck />} title='alert four' description={description} />
            <Alert type='default' icon={<Shield />} title='alert five'>
            <>
            Lorem ipsum dolor sit amet consectetur,<a href="/"> Link </a> 
                adipisicing elit. Porro quos excepturi iure asperiores voluptatum,
                id dolor saepe doloremque cumque delectus molestiae ullam cupiditate facere nam distinctio molestias, nihil dolore mollitia!
                id dolor saepe doloremque cumque delectus molestiae ullam cupiditate facere nam distinctio molestias, nihil dolore mollitia!
                Lorem ipsum dolor sit amet consectetur,
                asdasdsadasdasd
                adipisicing elit. Porro quos excepturi iure asperiores voluptatum,
                id dolor saepe doloremque cumque delectus molestiae ullam cupiditate facere nam distinctio molestias, nihil dolore mollitia!
                id dolor saepe doloremque cumque delectus molestiae ullam cupiditate facere nam distinctio molestias, nihil dolore mollitia!
            </>
                
            </Alert>

        </>
    )
}

export default index