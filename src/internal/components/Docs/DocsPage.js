import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';
import PageHeader from 'internal/components/PageHeader';
import DocsMain from './DocsMain';

const DATA_PATH = `${process.env.PUBLIC_URL}/data`;
const SANDBOX_URL = process.env.REACT_APP_SANDBOX_URL;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export default function DocsPage({
  component: Component,
  docs,
  path,
  name,
  componentProps = {},
  mainProps = {},
  ...props
}) {
  const [files, setFiles] = useState();
  const [doc, setDoc] = useState();

  useEffect(() => {
    setDoc(docs?.components?.find((c) => c?.path === path));
  }, [path, docs]);

  useEffect(() => {
    fetch(`${DATA_PATH}/files${path}/files.json`)
      .then((res) => res.json())
      .then((data) => setFiles(data.files))
      .catch((err) => console.error(err));
  }, [path]);

  return (
    <Box className="DocsPage" fill="horizontal" {...props}>
      <PageHeader
        title={doc?.data?.name}
        description={doc?.data?.description}
        socials={{
          github: true,
          codeSandbox: true,
          codeSandboxUrl: `${SANDBOX_URL}/${doc?.directory}`,
          githubUrl: `${GITHUB_URL}/tree/master/src/${doc?.directory}`,
        }}
        margin={{ top: 'small', bottom: 'large' }}
      />
      <DocsMain files={files || []} doc={doc} {...mainProps}>
        <Component {...componentProps} />
      </DocsMain>
    </Box>
  );
}
