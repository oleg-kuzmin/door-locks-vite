import { FormContent } from './FormContent';
import { FormInput } from './FormInput';
import { FormSubtitle } from './FormSubtitle';
import { FormUi } from './FormUi';
import { ButtonMain, SectionTitle } from 'shared/ui';
import styles from './CallForm.module.scss';

interface CallFormProps {
  className?: string;
}

export function CallForm({ className }: Readonly<CallFormProps>) {
  const externalClass = className ? ` ${className}` : '';
  return (
    <form className={styles.CallForm + externalClass} name="callForm" id="callForm">
      <FormContent>
        <SectionTitle className={styles.CallForm__SectionTitle} text="Мы Вам перезвоним" />
        <FormSubtitle
          className={styles.CallForm__FormSubtitle}
          text="Если у вас возникли какие-то вопросы или проблемы, заполните форму и мы Вам перезвоним."
        />
        <FormUi>
          <FormInput className={styles.CallForm__FormInput} type="text" name="name" placeholder="Ваше имя" />
          <FormInput className={styles.CallForm__FormInput} type="email" name="email" placeholder="Ваш Email" />
          <ButtonMain
            className={styles.CallForm__ButtonMain}
            text="Отправить"
            onClick={() => console.log('Форма отправлена')}
          />
        </FormUi>
      </FormContent>
    </form>
  );
}
