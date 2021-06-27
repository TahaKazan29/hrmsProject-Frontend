import React from 'react'

export default function CardEmployerActive() {
    return (
        <div>
            <div className={"relative flex flex-col min-w-0 break-words rounded mb-6 xl:mb-0 shadow-lg " + (window.location.href.indexOf('/personnel/userOperation/employers/active') !== -1 ? "bg-blueGray-600" : "bg-white")}>
        <div className="flex-auto p-4">
          <div className="flex flex-wrap h-12">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
            <span className={"font-semibold text-xl " + (window.location.href.indexOf('/personnel/userOperation/employers/active') !== -1 ? "text-white" : "text-blueGray-700")}>
                Aktif İşverenler
              </span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-emerald-500"
              >
                <i class="fas fa-check-circle fa-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}
