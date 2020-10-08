import React, { useEffect, useState } from 'react';
import { Box } from 'grommet';

import DocsOverview from './DocsOverview';
import DocsMain from './DocsMain';

const DATA_BASE_PATH = `${process.env.PUBLIC_URL}/data`;
const SANDBOX_URL = process.env.REACT_APP_SANDBOX_URL;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export default function DocsPage({ component: Component, docs, path, name }) {
  const [files, setFiles] = useState();
  const [doc, setDoc] = useState();

  useEffect(() => {
    setDoc(docs?.components?.find((c) => c?.path === path));
  }, [path, docs]);

  useEffect(() => {
    fetch(`${DATA_BASE_PATH}/files${path}/files.json`)
      .then((res) => res.json())
      .then((data) => setFiles(data.files))
      .catch((err) => console.error(err));
  }, [path]);

  return (
    <Box className="DocsPage" gap="large" fill="horizontal">
      <DocsOverview
        name={doc?.data?.name}
        description={doc?.data?.description}
        content={doc?.content}
        sandboxUrl={`${SANDBOX_URL}/${doc?.directory}`}
        githubUrl={`${GITHUB_URL}/tree/master/src/${doc?.directory}`}
      />
      <DocsMain files={files || []} doc={doc}>
        <Component />
      </DocsMain>
      <Box fill></Box>
    </Box>
  );
}
