import { Formik, Form } from "formik";
import { useCallback } from 'react'
import { Button, Modal, Input } from '../../../../ui'
import { setActiveUser } from "../../../../store/users";
import * as Yup from 'yup'
import { useDispatch } from "react-redux";
import { dataLabelPaths } from '../../data'
import _ from 'lodash'


function UserModal(props) {
    const { showModal, setShowModal, user, onSave } = props
    const dispatch = useDispatch()

    const initialValues = {
        name: _.get(user, dataLabelPaths.name, 'qwdqq'),
        username: _.get(user, dataLabelPaths.username, 'ewfwef'),
        email: _.get(user, dataLabelPaths.email, 'qwd@fd.com'),
        address: {
            city: _.get(user, dataLabelPaths.city, 'qdqwd'),
            zipcode: _.get(user, dataLabelPaths.zipcode, '123123')
        },
        phone: _.get(user, dataLabelPaths.phone, '234234'),
        website: _.get(user, dataLabelPaths.website, 'dqwdw'),
        company: {
            name: _.get(user, dataLabelPaths.company, 'qwdqwd')
        }
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Must be more than 3 characters').required('Required'),
        username: Yup.string().min(3, 'Must be more than 3 characters').required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required'),
        website: Yup.string().required('Required'),
        company: Yup.object().shape({
            name: Yup.string().required('Required'),
        }),
        address: Yup.object().shape({
            city: Yup.string().required('Required'),
            zipcode: Yup.string().required('Required'),
        }),
    });

    const getNewData = (values) => {
        return {
            name: values.name,
            username: values.username,
            email: values.email,
            address: {
                city: values.address.city,
                zipcode: values.address.zipcode
            },
            phone: values.phone,
            website: values.website,
            company: {
                name: values.company.name
            }
        }
    }

    const handleFormBlur = useCallback(
        (event, values, handleBlur) => {
            handleBlur(event);

            dispatch(setActiveUser(getNewData(values)));
        },
        [dispatch],
    );

    const saveChanges = async (e, values) => {
        e.preventDefault();

        dispatch(onSave({...user, ...getNewData(values)}))
        setShowModal(false);
    };

    return (
        <Modal className='user-modal' show={showModal} close={() => setShowModal(false)}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => { }}
            >
                {({ touched, errors, handleBlur, values, handleChange }) => {
                    return (
                        <Form className='user-modal__form'>
                            <Input handleChange={handleChange} onBlur={(e) => handleFormBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='name' label='Name' />
                            <Input handleChange={handleChange} onBlur={(e) => handleFormBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='username' label='Username' />
                            <Input handleChange={handleChange} onBlur={(e) => handleFormBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='email' name='email' label='Email' />
                            <Input handleChange={handleChange} onBlur={(e) => handleFormBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='address.city' label='City' />
                            <Input handleChange={handleChange} onBlur={(e) => handleFormBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='address.zipcode' label='Zipcode' />
                            <Input handleChange={handleChange} onBlur={(e) => handleFormBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='phone' label='Phone' />
                            <Input handleChange={handleChange} onBlur={(e) => handleFormBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='website' label='Website' />
                            <Input handleChange={handleChange} onBlur={(e) => handleFormBlur(e, values, handleBlur)} touched={touched} errors={errors} values={values} type='text' name='company.name' label='Company' />
                            <Button className='user-modal__save' onClick={e => saveChanges(e, values)} actionName='save' />
                        </Form>
                    )
                }}

            </Formik>
        </Modal>
    );
}
export default UserModal;