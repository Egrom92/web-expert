import { Formik, Form, Field } from "formik";
import { useCallback } from 'react'
import { Button, Modal, Input } from '../../../../ui'
import { setUserNewData } from "../../../../store/users";
import * as Yup from 'yup'
import hc from "../../../../server/hc";
import { useDispatch } from "react-redux";
import { dataLabelPaths } from '../../data'
import _ from 'lodash'


function UserModal(props) {
    const { showModal, setShowModal, user } = props
    const dispatch = useDispatch()

    const initialValues = Object.entries(dataLabelPaths).reduce((acc, [key, value]) => {
        acc[key] = _.get(user, value, undefined);
        return acc;
    }, {});


    const handleFormBlur = useCallback(
        (event, values, handleBlur) => {
            handleBlur(event);
            dispatch(setUserNewData(values));
            console.log(values);
        },
        [dispatch],
    );

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Must be more than 3 characters').required('Required'),
        username: Yup.string().min(3, 'Must be more than 3 characters').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        city: Yup.string().required('Required'),
        zipcode: Yup.string().required('Required'),
        phone: Yup.string().required('Required'),
        website: Yup.string().url('Invalid URL').required('Required'),
        company: Yup.string().required('Required'),
    });

    const saveChanges = (e, values) => {
        e.preventDefault();

        Promise.resolve()
            .then(() => hc.patch(`/users/${user.id}`, values))
            .then(() => dispatch(setUserNewData(values)))
            .then(() => setShowModal(false));
    };

    return (
        <Modal className='user-modal' show={showModal} close={() => setShowModal(false)}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => { }}
            >
                {({ touched, errors, handleBlur, values }) => {
                    return (
                        <Form className='user-modal__form'>
                            <Input onBlur={(e) => handleBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='name' label='Name' />
                            <Input onBlur={(e) => handleBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='username' label='Username' />
                            <Input onBlur={(e) => handleBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='email' name='email' label='Email' />
                            <Input onBlur={(e) => handleBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='city' label='City' />
                            <Input onBlur={(e) => handleBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='zipcode' label='Zipcode' />
                            <Input onBlur={(e) => handleBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='phone' label='Phone' />
                            <Input onBlur={(e) => handleBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='website' label='Website' />
                            <Input onBlur={(e) => handleBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='company' label='Company' />
                            <Button className='user-modal__save' onClick={e => saveChanges(e, values)} actionName='save' />
                        </Form>
                    )
                }}

            </Formik>
        </Modal>
    );
}
export default UserModal;