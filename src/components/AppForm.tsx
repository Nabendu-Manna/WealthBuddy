import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';
import { useForm, Controller, SubmitErrorHandler, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import React from 'react';

type MyFormInputs = {
    name: string
    phone: string
}

const AppForm = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm<MyFormInputs>();

    const onSubmit: SubmitHandler<MyFormInputs> = data => {
        console.log(data);
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-shadow
    const onError: SubmitErrorHandler<MyFormInputs> = (errors, e) => {
        // return console.log("form errors")
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <Controller
                control={control}
                name="name"
                rules={{
                    required: {
                        value: true,
                        message: 'Name is required!',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={inpValue => onChange(inpValue)}
                        value={value}
                    />
                )}
            />
            <ErrorMessage errors={errors} name="name" render={({ message }) => <Text>{message}</Text>} />

            <Text style={styles.label}>Phone</Text>
            <Controller
                control={control}
                name="phone"
                rules={{
                    required: {
                        value: true,
                        message: 'Phone number is required!',
                    }, pattern: {
                        value: /^\d{10}$/,
                        message: 'It\'s not a valid phone number',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput style={styles.input}
                        onBlur={onBlur}
                        onChangeText={(inpValue) => onChange(inpValue)}
                        value={value}
                        keyboardType="numeric"
                    />
                )}
            />
            <ErrorMessage errors={errors} name="phone" render={({ message }) => <Text>{message}</Text>} />


            {/* <Button
                color='#1593DC'
                title="Reset"
                onPress={() => {
                    reset({
                        email: '',
                        password: ''
                    })
                }}
            /> */}

            <Pressable
                style={styles.button}
                android_ripple={{
                    color: '#FFFFFF43',
                    borderless: false,
                }}
                onPress={handleSubmit(onSubmit, onError)}>
                <Text style={styles.buttonText}>Submit (Pressable)</Text>
            </Pressable>

            <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={handleSubmit(onSubmit, onError)}>
                <Text style={styles.buttonText}>Submit (TouchableOpacity)</Text>
            </TouchableOpacity>

            <Pressable
                style={styles.resetButton}
                android_ripple={{
                    color: '#FFFFFF08',
                    borderless: false,
                }}
                onPress={() => {
                    reset({
                        name: '',
                        phone: '',
                    });
                }}>
                <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
        </View>
    );
};

export default AppForm;

const styles = StyleSheet.create({
    label: {
        color: '#ffffff',
        marginTop: 20,
        marginBottom: 10,
    },
    input: {
        color: '#ffffff',
        backgroundColor: '#434343',
        borderColor: 'none',
        height: 40,
        padding: 10,
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#059EF7',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 0,
        marginTop: 30,
        marginBottom: 10,
    },
    resetButton: {
        color: '#ED2D37',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        elevation: 0,
        marginTop: 5,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        // paddingTop: Constants.statusBarHeight,
        padding: 8,
        backgroundColor: '#0D0F1A',
    },
});
