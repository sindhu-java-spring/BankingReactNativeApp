import React from 'react';
import { View, TextInput, Button, Text, Picker } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

const DepositScreen = () => {
  const createDeposit = async (values) => {
    console.log('Deposit transaction:', values);
  };

  return (
    <View style={{ padding: 16 }}>
      <Text>Create Deposit (Pay-In)</Text>
      <Formik
        initialValues={{ accountId: '', amount: '', reference: '' }}
        validationSchema={Yup.object({
          accountId: Yup.string().required(),
          amount: Yup.number().required().positive(),
          reference: Yup.string(),
        })}
        onSubmit={createDeposit}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <TextInput placeholder="Account ID" value={values.accountId} onChangeText={handleChange('accountId')} />
            <TextInput placeholder="Amount" value={values.amount} onChangeText={handleChange('amount')} keyboardType="decimal-pad" />
            <TextInput placeholder="Reference (optional)" value={values.reference} onChangeText={handleChange('reference')} />
            <Button title="Deposit" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </View>
  );
};

export default DepositScreen;
