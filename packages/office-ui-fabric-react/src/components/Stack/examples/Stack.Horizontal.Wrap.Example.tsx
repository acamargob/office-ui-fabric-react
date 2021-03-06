import * as React from 'react';
import { DefaultPalette, Slider, Stack, IStackStyles, IStackTokens } from 'office-ui-fabric-react';

export interface IExampleState {
  stackWidth: number;
}

// Non-mutating styles definition
const itemStyles: React.CSSProperties = {
  alignItems: 'center',
  background: DefaultPalette.themePrimary,
  color: DefaultPalette.white,
  display: 'flex',
  height: 50,
  justifyContent: 'center',
  width: 50
};

// Tokens definition
const sectionStackTokens: IStackTokens = { childrenGap: 10 };
const wrapStackTokens: IStackTokens = { childrenGap: 30 };

export class HorizontalStackWrapExample extends React.Component<{}, IExampleState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      stackWidth: 100
    };
  }

  public render(): JSX.Element {
    // Mutating styles definition
    const stackStyles: IStackStyles = {
      root: {
        background: DefaultPalette.themeTertiary,
        width: `${this.state.stackWidth}%`
      }
    };

    return (
      <Stack tokens={sectionStackTokens}>
        <Slider
          label="Change the stack width to see how child items wrap onto multiple rows:"
          min={1}
          max={100}
          step={1}
          defaultValue={100}
          showValue={true}
          onChange={this._onWidthChange}
        />

        <Stack horizontal wrap styles={stackStyles} tokens={wrapStackTokens}>
          <span style={itemStyles}>1</span>
          <span style={itemStyles}>2</span>
          <span style={itemStyles}>3</span>
          <span style={itemStyles}>4</span>
          <span style={itemStyles}>5</span>
          <span style={itemStyles}>6</span>
          <span style={itemStyles}>7</span>
          <span style={itemStyles}>8</span>
          <span style={itemStyles}>9</span>
          <span style={itemStyles}>10</span>
        </Stack>
      </Stack>
    );
  }

  private _onWidthChange = (value: number): void => {
    this.setState({ stackWidth: value });
  };
}
