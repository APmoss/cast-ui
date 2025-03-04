import React from 'react';
import Icon from 'react-icons-kit';
import { ic_content_copy as ICopy } from 'react-icons-kit/md/ic_content_copy';
import { storiesOf } from '@storybook/react';
import { withTheme } from 'styled-components';
import { CopyToClipboard } from '../CopyToClipboard';
import Tooltip from '../Tooltip';

const Color = withTheme<any>(({ theme: { colors } }: any) =>
  Object.keys(colors).map(key => (
    <Tooltip
      key={key}
      content={colors[key].toUpperCase()}
      placement="top-start"
    >
      <div
        key={key}
        style={{ display: 'flex', fontSize: '.8em', marginBottom: 12 }}
      >
        <div style={{ width: 100, height: 52, backgroundColor: colors[key] }} />
        <div style={{ flex: 1 }}>
          <CopyToClipboard
            copyContainerClass="copy-container"
            copyContent={`${key[0].toUpperCase()}${key.substring(1)}`}
            copyButtonContent={<Icon size={16} icon={ICopy} />}
            copyButtonClass="copy-button"
            fullWidth
            includeCopyButton={true}
          />
        </div>
      </div>
    </Tooltip>
  )),
);

storiesOf('Colors', module).add('Colors', () => <Color />, {
  info: {
    text: `
        ### Notes

        This is available colors
        `,
  },
});
