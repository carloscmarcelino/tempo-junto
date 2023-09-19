import { useCalculateTimeDifference } from '@/hooks/useCalculateTimeDifference';
import { FormValues } from '@/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Home() {
  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: {
      data: '2023-01-04',
      showInDays: true,
      showInYears: true,
    },
  });

  const [result, setResult] = useState<string[]>([]);

  const { handleResult } = useCalculateTimeDifference();

  const onSubmit = (values: FormValues) => {
    handleResult({ values, setResult });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="date">Quando vc conheceu seu amor?</label>
        <input id="date" type="date" {...register('data')} />

        <div>
          <input
            type="checkbox"
            id="showInDays"
            defaultChecked
            {...register('showInDays')}
          />
          <label htmlFor="showInDays">Em dias</label>

          <input
            type="checkbox"
            id="showInYears"
            defaultChecked
            {...register('showInYears')}
          />
          <label htmlFor="showInYears">Em anos</label>
        </div>

        <button>Calcular</button>
      </form>

      {!!result.length && (
        <div>
          {result.map((res) => (
            <h2 key={res}>{res}</h2>
          ))}
        </div>
      )}
    </>
  );
}
