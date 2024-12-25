import Button from './Button';
import Student from './student'
import Main from './Main'
import { useNavigate } from 'react-router-dom';


const stylesheet = {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}

function Demo() {
    const navigate = useNavigate()
    return <div style={stylesheet}>
        <Main>
            <Student>student test children</Student>
            <Button clickParam={()=>navigate('/json')}>Ravi</Button>
        </Main>
    </div>
}

export default Demo;