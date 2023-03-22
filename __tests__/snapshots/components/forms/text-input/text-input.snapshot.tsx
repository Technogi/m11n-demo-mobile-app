import React from 'react'
import { Control, FieldValues, useForm } from 'react-hook-form'
import renderer from 'react-test-renderer'
import { TextInputForm } from 'src/components'

const TestInputForm = (): JSX.Element => {
  const {
    control,
    formState: { errors },
  } = useForm({ mode: 'all', defaultValues: { email: '' } })

  return (
    <TextInputForm
      name="email"
      placeholder="Enter your email"
      control={control as unknown as Control<FieldValues>}
      errors={errors}
    />
  )
}

it('TextInputForm renders correctly', () => {
  const tree = renderer.create(<TestInputForm />).toJSON()
  expect(tree).toMatchSnapshot()
})
