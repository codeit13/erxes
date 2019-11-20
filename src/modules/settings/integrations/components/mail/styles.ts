import { SelectWrapper } from 'modules/common/components/form/styles';
import { colors, dimensions } from 'modules/common/styles';
import { Attachment } from 'modules/inbox/styles';
import styled from 'styled-components';
import styledTS from 'styled-components-ts';

const AttachmentContainer = styled(Attachment)`
  padding: 5px 10px;
  border-radius: 2px;
  margin: 0 5px 5px 0;
  color: ${colors.colorWhite};

  i {
    cursor: pointer;
    opacity: 0.6;
    transition: opacity ease 0.3s;
    font-size: 12px;

    &:hover {
      opacity: 1;
    }
  }
`;

const Uploading = styled.div`
  display: flex;
  align-items: baseline;
  color: ${colors.colorCoreGray};
  font-size: 12px;
`;

const ControlWrapper = styled.div`
  position: relative;
`;

const LeftSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px 10px 0 0;
`;

const MailEditorWrapper = styled.div`
  position: relative;
  background: ${colors.colorWhite};

  .cke {
    border: 0;
    border-bottom: 1px solid ${colors.borderPrimary};
  }

  .cke_bottom {
    display: none;
  }

  .cke_inner {
    position: relative;

    .cke_top {
      position: absolute;
      background: ${colors.bgLight};
      right: 0;
      left: 0;
      bottom: 0;
      border-bottom: 0;
      padding-left: ${dimensions.coreSpacing}px;
      padding-right: ${dimensions.coreSpacing}px;
      border-top: 1px solid ${colors.borderPrimary};
      max-height: 60px;
      overflow: hidden;
    }

    .cke_contents {
      min-height: 160px !important;
    }
  }

  .cke_toolgroup {
    border: 0;
    margin-left: ${dimensions.unitSpacing / 2}px;
  }
`;

const Resipients = styledTS<{ isActive?: boolean }>(styled.a)`
  padding-left: ${dimensions.unitSpacing}px;
  font-size: 12px;
  color: ${colors.colorCoreLightGray};
  display: ${props => props.isActive && 'none'};
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${colors.colorCoreGray};
  }
`;

const EditorFooter = styled.div`
  padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px;
`;

const Attachments = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 6px ${dimensions.coreSpacing}px 2px ${dimensions.coreSpacing}px
  border-bottom: 1px solid ${colors.borderPrimary};
`;

const FlexRow = styled.div`
  display: flex;
  align-items: center;

  > label {
    margin: 2px ${dimensions.unitSpacing}px 2px 0;
    color: ${colors.colorCoreGray};
  }
`;

const ToolBar = styled.div`
  i {
    font-size: 18px;
    color: ${colors.colorLightGray};
  }

  label {
    color: ${colors.colorCoreGray};
    margin-right: 10px;
    font-size: 14px;
    margin-bottom: 0;

    &:hover {
      cursor: pointer;
    }
  }

  input[type='file'] {
    display: none;
  }
`;

const SpaceBetweenRow = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  input,
  ${SelectWrapper} {
    height: ${dimensions.coreSpacing}px;
    border-bottom: 0;
    padding: 0;

    select {
      height: ${dimensions.coreSpacing}px;
    }
  }
`;

const Column = styled.div`
  flex: 1;
`;

const Subject = styled.div`
  padding: ${dimensions.unitSpacing}px ${dimensions.coreSpacing}px;
  border-bottom: 1px solid ${colors.borderPrimary};

  input {
    height: ${dimensions.coreSpacing}px;
    border-bottom: 0;
  }
`;

export {
  Attachments,
  FlexRow,
  Column,
  Subject,
  ToolBar,
  MailEditorWrapper,
  ControlWrapper,
  LeftSection,
  Resipients,
  Uploading,
  AttachmentContainer,
  SpaceBetweenRow,
  EditorFooter
};
