import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const PayoutScreen = () => {
  const createPayout = async (values) => {
    console.log('Payout instruction:', values);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Create Payment Instruction (Pay-Out)</Text>
      <Formik
        initialValues={{ fromAccountId: '', beneficiaryName: '', beneficiaryAccount: '', amount: '' }}
        validationSchema={Yup.object({
          fromAccountId: Yup.string().required(),
          beneficiaryName: Yup.string().required(),
          beneficiaryAccount: Yup.string().required(),
          amount: Yup.number().required().positive(),
        })}
        onSubmit={createPayout}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <TextInput placeholder="From Account ID" value={values.fromAccountId} onChangeText={handleChange('fromAccountId')} />
            <TextInput placeholder="Beneficiary Name" value={values.beneficiaryName} onChangeText={handleChange('beneficiaryName')} />
            <TextInput placeholder="Beneficiary Account (IBAN)" value={values.beneficiaryAccount} onChangeText={handleChange('beneficiaryAccount')} />
            <TextInput placeholder="Amount" value={values.amount} onChangeText={handleChange('amount')} keyboardType="decimal-pad" />
            <Button title="Pay Out" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default PayoutScreen;
