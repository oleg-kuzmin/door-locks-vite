import { FormContent } from './FormContent';
import { FormSubtitle } from './FormSubtitle';
import { SectionTitle } from 'shared/ui';
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
      </FormContent>
    </form>
  );
}
