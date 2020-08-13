import React, {  useState } from 'react'
import { Layout} from 'antd'
import classNames from 'classnames'

import {routers} from 'src/routes'
import {SideMenu} from './SideMenu/SideMenu'
import HeaderWrapper from './Header/Header'
import ContentWrapper from './Content/Content'
import { currentTheme, ThemeType} from 'src/packages/datav-core/src'
import appEvents from 'src/core/library/utils/app_events'
import OnRoute from './OnRoute'
import ModalService from 'src/core/services/modal'
import SearchWrapper from 'src/views/search/components/SearchWrapper'
import './Layouts.less'

const Layouts = () => {
  const [headerShow,setHeaderShow] = useState(true)
 

  appEvents.on('hide-layouts-header',() => {
    setHeaderShow(false)
  })

  appEvents.on('show-layouts-header',() => {
    setHeaderShow(true)
  })

  const appClasses = classNames({
    'datav-layouts' : true,
    'datav-layouts-dark': currentTheme === ThemeType.Dark,
    'datav-layouts-light': currentTheme === ThemeType.Light
  })

  return (
    <Layout className={appClasses}>
      <SideMenu  />
      <Layout className="datav-layout">
        {headerShow && <HeaderWrapper />}
        <ContentWrapper routers={routers} />
      </Layout>

      <ModalService />
      <OnRoute />
      <SearchWrapper />
    </Layout> 
  )
}

export default Layouts