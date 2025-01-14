import { type Application, Theme } from '@logto/schemas';
import classNames from 'classnames';
import { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import ProtectedAppDarkIcon from '@/assets/icons/protected-app-dark.svg';
import ProtectedAppIcon from '@/assets/icons/protected-app.svg';
import Button from '@/ds-components/Button';
import TextLink from '@/ds-components/TextLink';
import useDocumentationUrl from '@/hooks/use-documentation-url';
import useTheme from '@/hooks/use-theme';

import ProtectedAppModal from '../ProtectedAppModal';

import * as styles from './index.module.scss';

type Props = {
  className?: string;
  /** When used in application creation modal, card has a "PROTECTED APP" label on top of it */
  isInAppCreationPage?: boolean;
  hasBorder?: boolean;
  hasCreateButton?: boolean;
  onCreateSuccess?: (app: Application) => void;
};

function ProtectedAppCard({
  className,
  isInAppCreationPage,
  hasBorder,
  hasCreateButton,
  onCreateSuccess,
}: Props) {
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console.protected_app' });
  const { documentationSiteUrl } = useDocumentationUrl();
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const theme = useTheme();
  const Icon = theme === Theme.Light ? ProtectedAppIcon : ProtectedAppDarkIcon;

  return (
    <>
      <div className={classNames(styles.container, className)}>
        {isInAppCreationPage && <label>{t('name')}</label>}
        <div className={classNames(styles.card, hasBorder && styles.hasBorder)}>
          <Icon className={styles.logo} />
          <div className={styles.wrapper}>
            <div className={isInAppCreationPage ? styles.label : styles.title}>
              {t(isInAppCreationPage ? 'name' : 'title')}
            </div>
            <div className={styles.description}>
              <Trans
                components={{
                  // TODO: @charles Update documentation URL when it's ready
                  a: <TextLink href={documentationSiteUrl} targetBlank="noopener" />,
                }}
              >
                {t('description')}
              </Trans>
            </div>
          </div>
          {hasCreateButton && (
            <Button
              title="protected_app.fast_create"
              onClick={() => {
                setShowCreateModal(true);
              }}
            />
          )}
        </div>
      </div>
      {showCreateModal && (
        <ProtectedAppModal
          onClose={(app) => {
            setShowCreateModal(false);
            if (app) {
              onCreateSuccess?.(app);
            }
          }}
        />
      )}
    </>
  );
}

export default ProtectedAppCard;
