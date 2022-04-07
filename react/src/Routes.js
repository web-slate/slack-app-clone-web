import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

// Block Components.
import { PageLoader } from '@/blocks'

// Utils.
import { RoutePaths } from '@/utils'

const ApplicationModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/Application" */ './modules/Application')
)

const NotFoundModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/NotFound" */ './modules/NotFound')
)

const RoutesComponent = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path={RoutePaths.Home} exact element={<ApplicationModule />} />
        <Route path="*" element={<NotFoundModule />} />
      </Routes>
    </Suspense>
  )
}

export default RoutesComponent
