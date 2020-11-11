import React, { useEffect, useMemo, useState } from 'react';
import { Box } from 'grommet';
import PageHeader from 'internal/components/PageHeader';
import DocsMain from './DocsMain';

const DATA_PATH = `${process.env.PUBLIC_URL}/data`;
const SANDBOX_URL = process.env.REACT_APP_SANDBOX_URL;
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const TWITTER_SHARE_URL = process.env.REACT_APP_TWITTER_SHARE_URL;
const TWITTER_USER = process.env.REACT_APP_TWITTER_USER;
export default function Docs({
  component: Component,
  docs,
  path,
  name,
  componentProps = {},
  mainProps = {},
  bookmarks = [],
  onBookmark = () => {},
  ...props
}) {
  const [files, setFiles] = useState();
  const [themes, setThemes] = useState();
  const [doc, setDoc] = useState();
  const isBookmarked = useMemo(() => {
    return (
      bookmarks?.some((bookmark) => bookmark?.componentId === doc?.id) &&
      bookmarks?.some((bookmark) => bookmark?.categoryId === doc?.categoryId)
    );
  }, [bookmarks, doc]);

  const shareUrl = useMemo(() => {
    const textParam = doc?.name
      ? encodeURIComponent(`${doc?.name} starter app by CodeTools.io`)
      : encodeURIComponent(`Starter App by CodeTools.io`);
    const urlParam = encodeURIComponent(
      `${window.location.origin}${window.location.pathname}`
    );
    const twitterUser = encodeURIComponent(TWITTER_USER?.replace('@', ''));
    return `${TWITTER_SHARE_URL}?text=${textParam}&url=${urlParam}&via=${twitterUser}`;
  }, [doc]);
  useEffect(() => {
    setDoc(docs?.components?.find((c) => c?.path === path));
  }, [path, docs]);

  useEffect(() => {
    fetch(`${DATA_PATH}/files${path}/files.json`)
      .then((res) => res.json())
      .then((data) => setFiles(data.files))
      .catch((err) => console.error(err));
  }, [path]);

  useEffect(() => {
    fetch(`${DATA_PATH}/themes.json`)
      .then((res) => res.json())
      .then((data) => {
        setThemes(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box className="Docs" fill="horizontal" {...props}>
      <PageHeader
        title={doc?.data?.name}
        description={doc?.data?.description}
        socials={{
          github: {
            url: `${GITHUB_URL}/tree/master/src/${doc?.directory}`,
            text: 'View Source',
            size: 'small',
          },
          codeSandbox: {
            url: `${SANDBOX_URL}/${doc?.directory}`,
            text: 'Create Sandbox',
            size: 'small',
          },
          twitter: {
            url: shareUrl,
            text: 'Share',
            size: 'small',
          },
          bookmark: {
            text: 'Save',
            size: 'small',
            color: isBookmarked ? 'brand-1' : 'brand-2',
            onClick: () => {
              onBookmark({
                componentId: doc?.id,
                categoryId: doc?.categoryId,
                moduleId: doc?.moduleId,
              });
            },
          },
        }}
        margin={{ top: 'small', bottom: 'large' }}
      />
      <DocsMain
        files={files || []}
        themes={themes || {}}
        doc={doc}
        {...mainProps}
      >
        <Component {...componentProps} />
      </DocsMain>
    </Box>
  );
}
