import { CodeEditor } from '@/components/animate-ui/components/code-editor';
import { React } from '../icons/react';

export const CodeEditorDemo = () => {
  return (
    <CodeEditor
      className="h-[300px] xs:h-[400px] w-full max-w-full xs:max-w-[500px] sm:h-[480px] sm:max-w-[640px]"
      copyButton
      cursor={true}
      delay={0.5}
      duration={5}
      icon={<React />}
      inView={true}
      inViewMargin="-100px"
      inViewOnce={true}
      lang="tsx"
      title="component.tsx"
      writing={true}
    >
      {`'use client';

import * as React from 'react';

type MyComponentProps = {
  myProps: string;
} & React.HTMLAttributes<HTMLDivElement>;

const MyComponent = React.forwardRef<HTMLDivElement, MyComponentProps>(
  ({ myProps, ...props }, ref) => {
    return (
      <div ref={ref} {...props}>
        <p>My Component</p>
      </div>
    );
  },
);

MyComponent.displayName = 'MyComponent';

export { MyComponent, type MyComponentProps };`}
    </CodeEditor>
  );
};
