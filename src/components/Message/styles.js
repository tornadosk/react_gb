import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    form: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        margin: '10px',
        marginLeft: '100px',
        flexGrow: '1',

    },
    field: {
        width: '500px',
        padding: '15px',
        marginLeft: '100px',
    },
    button: {
        alignSelf: 'flex-end',
        marginRight: '100px',
        borderRadius: '60px',
        padding: '45px',
    }

}))