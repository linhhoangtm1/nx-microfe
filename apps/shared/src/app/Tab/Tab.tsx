import { useState } from 'react';
import styles from './Tab.module.scss';

interface ITab {
  key: number;
  title: string;
  content: React.ReactNode;
}
export interface TabProps {
  tabs: ITab[];
  activeKey?: number;
}

export function Tab(props: TabProps) {
  const { tabs, activeKey = 1 } = props;
  const [toggleState, setToggleState] =
    useState<TabProps['activeKey']>(activeKey);
  const toggleTab = (idx: TabProps['activeKey']) => {
    setToggleState(idx);
  };
  return (
    <div className="container max-w-none">
      <div className={styles['block-tabs']}>
        {tabs.map((el) => (
          <button
            key={el.key}
            className={
              toggleState === el.key
                ? `${styles['tabs']} ${styles['tabs-active']}`
                : styles['tabs']
            }
            onClick={() => toggleTab(el.key)}
          >
            {el.title}
          </button>
        ))}
      </div>
      <div className="content-tabs">
        {tabs.map((el) => (
          <div
            key={el.key}
            className={
              toggleState === el.key
                ? `${styles['content']} ${styles['active-content']}`
                : styles['content']
            }
          >
            {el.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tab;
