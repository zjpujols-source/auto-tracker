// AutoTracker - Complete Logic & Multi-language Support
(function () {
  'use strict';

  // --- TRANSLATIONS (SPANISH & ENGLISH) ---
  const i18n = {
    es: {
      appSubtitle: "Control de Mantenimiento y Gasolina",
      vinLabel: "VIN / No. Serie",
      currentMileageLabel: "Millas Actuales",
      quickOdometerHint: "Actualizar odómetro rápido:",
      updateBtn: "Actualizar",
      maintenanceStatusHeading: "Estado de Mantenimiento",
      oilChangeTitle: "Cambio de Aceite",
      tireChangeTitle: "Rotación / Llantas",
      fuelPerformanceHeading: "Rendimiento de Gasolina",
      recentServicesHeading: "Últimos Servicios Realizados",
      recentFuelHeading: "Últimas Cargas de Gasolina",
      viewAllBtn: "Ver todos →",
      avgMpgLabel: "Promedio MPG",
      mpgUnit: "millas / galón",
      avgGpmLabel: "Galón por Milla",
      gpmUnit: "gal / mi",
      maintenanceTitle: "Servicios y Mantenimientos",
      maintenanceSubtitle: "Historial de cambios de aceite, llantas y más",
      addServiceBtn: "+ Nuevo Servicio",
      filterAll: "Todos los servicios",
      serviceOil: "Cambio de Aceite",
      serviceTires: "Rotación / Cambio de Llantas",
      serviceBrakes: "Frenos",
      serviceBattery: "Batería",
      serviceFilters: "Filtros (Aire / Cabina)",
      serviceGeneral: "Mantenimiento General",
      serviceOther: "Otro",
      fuelLogTitle: "Registro de Gasolina",
      fuelLogSubtitle: "Cargas de combustible y consumo galón/milla",
      addFuelBtn: "+ Cargar Gasolina",
      totalGallons: "Galones Totales",
      galPerMile: "Galón / Milla",
      settingsTitle: "Ajustes y Respaldo",
      dataManagementTitle: "Gestión de Datos",
      dataManagementDesc: "Todos los datos se guardan en tu teléfono. Guarda una copia para no perder tu historial.",
      exportCsvBtn: "Exportar a Excel (CSV)",
      exportBackupBtn: "Descargar Copia de Seguridad",
      importBackupBtn: "Restaurar Copia de Seguridad",
      loadSampleBtn: "Cargar Datos de Ejemplo",
      clearDataBtn: "Borrar Todos los Datos",
      installGuideTitle: "Instalar en tu Android",
      guideStep1: "Abre esta página en el navegador <strong>Google Chrome</strong> de tu teléfono.",
      guideStep2: "Toca el botón de tres puntos <strong>(⋮)</strong> en la esquina superior derecha.",
      guideStep3: "Selecciona <strong>\"Agregar a pantalla principal\"</strong> o <strong>\"Instalar aplicación\"</strong>.",
      guideStep4: "¡Listo! Se abrirá como una aplicación nativa completa con icono de auto.",
      navVehicle: "Vehículo",
      navMaintenance: "Servicios",
      navFuel: "Gasolina",
      navSettings: "Ajustes",
      editVehicleModalTitle: "Información del Vehículo",
      makeLabel: "Marca",
      makeHint: "Ej. Toyota, Ford, Honda",
      modelLabel: "Modelo",
      modelHint: "Ej. Corolla, Civic, F-150",
      yearLabel: "Año",
      mileageLabel: "Millas Actuales",
      vinHint: "17 caracteres (en la tarjeta de registro o parabrisas)",
      cancelBtn: "Cancelar",
      saveBtn: "Guardar",
      newServiceTitle: "Registrar Servicio",
      editServiceTitle: "Editar Servicio",
      serviceTypeLabel: "Tipo de Servicio",
      dateLabel: "Fecha",
      serviceMileageLabel: "Millas al Realizar",
      nextServiceIntervalLabel: "Próximo en (+millas)",
      nextIntervalHint: "Ej. 5000 para aceite",
      costLabel: "Costo Total ($)",
      optionalHint: "Opcional",
      notesLabel: "Notas / Taller",
      notesHint: "Taller mecánico, tipo de aceite, etc.",
      newFuelTitle: "Cargar Gasolina",
      editFuelTitle: "Editar Carga de Gasolina",
      odometerLabel: "Odómetro (Millas)",
      odometerHint: "Lectura actual en el tablero",
      gallonsLabel: "Galones",
      gallonsHint: "Ej. 11.45",
      totalCostLabel: "Costo Total ($)",
      gasStationLabel: "Gasolinera / Notas",
      statusUpToDate: "Al día",
      statusDueSoon: "¡Próximo!",
      statusOverdue: "¡Vencido!",
      dueInMiles: "Próximo en: {miles} mi",
      overdueByMiles: "Vencido por: {miles} mi",
      noRecordsYet: "No hay registros guardados todavía.",
      deleteConfirm: "¿Estás seguro de que deseas eliminar este registro?",
      clearConfirm: "¿Seguro que quieres borrar TODOS los datos? Esta acción no se puede deshacer.",
      sampleLoaded: "✨ ¡Datos de demostración cargados con éxito!",
      importedSuccess: "¡Copia de seguridad restaurada correctamente!",
      invalidFile: "Archivo no válido."
    },
    en: {
      appSubtitle: "Maintenance & Fuel Economy Tracker",
      vinLabel: "VIN / Serial No.",
      currentMileageLabel: "Current Mileage",
      quickOdometerHint: "Quick odometer update:",
      updateBtn: "Update",
      maintenanceStatusHeading: "Maintenance Health",
      oilChangeTitle: "Oil Change",
      tireChangeTitle: "Tire Rotation / Change",
      fuelPerformanceHeading: "Fuel Performance",
      recentServicesHeading: "Recent Services Logged",
      recentFuelHeading: "Recent Fuel Fill-Ups",
      viewAllBtn: "View all →",
      avgMpgLabel: "Average MPG",
      mpgUnit: "miles / gallon",
      avgGpmLabel: "Gallons per Mile",
      gpmUnit: "gal / mi",
      maintenanceTitle: "Services & Maintenance",
      maintenanceSubtitle: "History of oil changes, tire rotations and more",
      addServiceBtn: "+ New Service",
      filterAll: "All services",
      serviceOil: "Oil Change",
      serviceTires: "Tire Rotation / Change",
      serviceBrakes: "Brakes",
      serviceBattery: "Battery",
      serviceFilters: "Filters (Air / Cabin)",
      serviceGeneral: "General Maintenance",
      serviceOther: "Other",
      fuelLogTitle: "Fuel Log",
      fuelLogSubtitle: "Fuel fill-ups & gallon/mile economy",
      addFuelBtn: "+ Log Fuel",
      totalGallons: "Total Gallons",
      galPerMile: "Gal / Mile",
      settingsTitle: "Settings & Backup",
      dataManagementTitle: "Data Management",
      dataManagementDesc: "All data stays on your phone. Back up your data so you never lose vehicle records.",
      exportCsvBtn: "Export to Excel (CSV)",
      exportBackupBtn: "Download Backup File",
      importBackupBtn: "Restore Backup File",
      loadSampleBtn: "Load Demo Data",
      clearDataBtn: "Delete All Data",
      installGuideTitle: "Install on Android",
      guideStep1: "Open this web page in <strong>Google Chrome</strong> on your phone.",
      guideStep2: "Tap the three dots <strong>(⋮)</strong> in the top-right corner.",
      guideStep3: "Select <strong>\"Add to Home screen\"</strong> or <strong>\"Install App\"</strong>.",
      guideStep4: "All set! It launches as a full standalone app with a car icon.",
      navVehicle: "Vehicle",
      navMaintenance: "Services",
      navFuel: "Fuel",
      navSettings: "Settings",
      editVehicleModalTitle: "Vehicle Information",
      makeLabel: "Make",
      makeHint: "e.g., Toyota, Ford, Honda",
      modelLabel: "Model",
      modelHint: "e.g., Corolla, Civic, F-150",
      yearLabel: "Year",
      mileageLabel: "Current Mileage",
      vinHint: "17 characters (found on registration or windshield)",
      cancelBtn: "Cancel",
      saveBtn: "Save",
      newServiceTitle: "Log Service",
      editServiceTitle: "Edit Service",
      serviceTypeLabel: "Service Type",
      dateLabel: "Date",
      serviceMileageLabel: "Mileage at Service",
      nextServiceIntervalLabel: "Next Due in (+miles)",
      nextIntervalHint: "e.g., 5000 for oil change",
      costLabel: "Total Cost ($)",
      optionalHint: "Optional",
      notesLabel: "Notes / Shop",
      notesHint: "Repair shop, oil grade, etc.",
      newFuelTitle: "Log Fuel Fill-Up",
      editFuelTitle: "Edit Fuel Fill-Up",
      odometerLabel: "Odometer (Miles)",
      odometerHint: "Current dashboard reading",
      gallonsLabel: "Gallons",
      gallonsHint: "e.g., 11.45",
      totalCostLabel: "Total Cost ($)",
      gasStationLabel: "Gas Station / Notes",
      statusUpToDate: "Up to date",
      statusDueSoon: "Due Soon!",
      statusOverdue: "Overdue!",
      dueInMiles: "Due in: {miles} mi",
      overdueByMiles: "Overdue by: {miles} mi",
      noRecordsYet: "No records saved yet.",
      deleteConfirm: "Are you sure you want to delete this record?",
      clearConfirm: "Are you sure you want to delete ALL data? This action cannot be undone.",
      sampleLoaded: "✨ Demo data loaded successfully!",
      importedSuccess: "Backup restored successfully!",
      invalidFile: "Invalid backup file."
    }
  };

  // --- INITIAL / DEFAULT STATE ---
  const STORAGE_KEY = 'autotracker_data';

  const defaultState = {
    lang: 'es',
    vehicle: {
      make: 'Toyota',
      model: 'Corolla',
      year: 2022,
      vin: '4T1B11HK5MU123456',
      mileage: 45200
    },
    maintenance: [
      {
        id: 'm1',
        type: 'oil',
        date: '2026-08-15',
        mileage: 43000,
        interval: 5000,
        cost: 55.00,
        notes: 'Aceite Sintético 0W-20 y filtro OEM'
      },
      {
        id: 'm2',
        type: 'tires',
        date: '2026-07-10',
        mileage: 42000,
        interval: 6000,
        cost: 25.00,
        notes: 'Rotación y calibración de las 4 llantas'
      }
    ],
    fuel: [
      {
        id: 'f1',
        date: '2026-10-10',
        mileage: 44500,
        gallons: 11.2,
        cost: 38.50,
        notes: 'Chevron'
      },
      {
        id: 'f2',
        date: '2026-10-22',
        mileage: 44850,
        gallons: 10.8,
        cost: 37.00,
        notes: 'Shell'
      },
      {
        id: 'f3',
        date: '2026-10-29',
        mileage: 45200,
        gallons: 11.0,
        cost: 37.80,
        notes: 'Costco Gas'
      }
    ]
  };

  let state = loadState();

  function loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.vehicle && parsed.maintenance && parsed.fuel) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('LocalStorage not available, using in-memory state:', e);
    }
    return JSON.parse(JSON.stringify(defaultState));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }
    render();
  }

  // --- TOAST NOTIFICATION ---
  function showToast(msg) {
    const toast = document.getElementById('toastMessage');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  }

  // --- LANGUAGE MANAGEMENT ---
  function t(key, replacements = {}) {
    const lang = state.lang || 'es';
    let text = (i18n[lang] && i18n[lang][key]) || (i18n.es[key]) || key;
    for (const [k, v] of Object.entries(replacements)) {
      text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
    return text;
  }

  function applyLanguage() {
    document.documentElement.lang = state.lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      el.innerHTML = t(key);
    });

    const titleElements = document.querySelectorAll('[data-i18n-title]');
    titleElements.forEach((el) => {
      const key = el.getAttribute('data-i18n-title');
      el.setAttribute('title', t(key));
    });

    // Language toggle button text
    const langLabel = document.getElementById('langLabel');
    const langIcon = document.getElementById('langIcon');
    if (state.lang === 'es') {
      langLabel.textContent = 'EN';
      langIcon.textContent = '🇺🇸';
    } else {
      langLabel.textContent = 'ES';
      langIcon.textContent = '🇪🇸';
    }
  }

  function toggleLanguage() {
    state.lang = state.lang === 'es' ? 'en' : 'es';
    saveState();
  }

  // --- TAB NAVIGATION (Both Top & Bottom) ---
  function switchTab(tabId) {
    document.querySelectorAll('.tab-pane').forEach((p) => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach((b) => b.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));

    const targetPane = document.getElementById(tabId);
    if (targetPane) {
      targetPane.classList.add('active');
    }

    document.querySelectorAll(`[data-tab="${tabId}"]`).forEach((btn) => {
      btn.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function initTabs() {
    document.querySelectorAll('[data-tab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        switchTab(tabId);
      });
    });

    // Delegate "Ver todos →" links on the dashboard
    document.addEventListener('click', (e) => {
      const target = e.target.closest('.switch-to-tab');
      if (target) {
        const tabId = target.getAttribute('data-target-tab');
        if (tabId) {
          switchTab(tabId);
        }
      }
    });
  }

  // --- CALCULATIONS ---
  function processFuelLogs() {
    const logs = [...state.fuel].sort((a, b) => Number(a.mileage) - Number(b.mileage));
    const processed = [];

    for (let i = 0; i < logs.length; i++) {
      const current = logs[i];
      let mpg = null;
      let gpm = null;
      let tripMiles = null;

      if (i > 0) {
        const prev = logs[i - 1];
        tripMiles = Number(current.mileage) - Number(prev.mileage);
        if (tripMiles > 0 && Number(current.gallons) > 0) {
          mpg = tripMiles / Number(current.gallons);
          gpm = Number(current.gallons) / tripMiles;
        }
      }

      processed.push({
        ...current,
        tripMiles,
        mpg,
        gpm
      });
    }

    return processed.reverse(); // Newest first
  }

  function calculateFuelStats() {
    const sorted = [...state.fuel].sort((a, b) => Number(a.mileage) - Number(b.mileage));
    let totalTripMiles = 0;
    let totalGallonsForTrips = 0;
    let totalAllGallons = 0;
    let totalSpent = 0;

    for (let i = 0; i < sorted.length; i++) {
      totalAllGallons += Number(sorted[i].gallons) || 0;
      totalSpent += Number(sorted[i].cost) || 0;

      if (i > 0) {
        const trip = Number(sorted[i].mileage) - Number(sorted[i - 1].mileage);
        if (trip > 0 && Number(sorted[i].gallons) > 0) {
          totalTripMiles += trip;
          totalGallonsForTrips += Number(sorted[i].gallons);
        }
      }
    }

    let avgMpg = 0;
    let avgGpm = 0;
    if (totalTripMiles > 0 && totalGallonsForTrips > 0) {
      avgMpg = totalTripMiles / totalGallonsForTrips;
      avgGpm = totalGallonsForTrips / totalTripMiles;
    }

    return {
      avgMpg: avgMpg ? avgMpg.toFixed(1) : '--',
      avgGpm: avgGpm ? avgGpm.toFixed(3) : '--',
      totalGallons: totalAllGallons.toFixed(1),
      totalSpent: totalSpent.toFixed(2)
    };
  }

  function calculateServiceHealth(type, defaultInterval) {
    const currentMileage = Number(state.vehicle.mileage) || 0;
    const records = state.maintenance
      .filter((m) => m.type === type)
      .sort((a, b) => Number(b.mileage) - Number(a.mileage));

    if (records.length === 0) {
      return {
        badgeClass: 'warning',
        badgeText: t('statusDueSoon'),
        detail: t('dueInMiles', { miles: defaultInterval.toLocaleString() }),
        progress: 10
      };
    }

    const last = records[0];
    const interval = Number(last.interval) || defaultInterval;
    const nextDue = Number(last.mileage) + interval;
    const remaining = nextDue - currentMileage;

    const progressPct = Math.min(100, Math.max(0, Math.round(((interval - remaining) / interval) * 100)));

    if (remaining < 0) {
      return {
        badgeClass: 'danger',
        badgeText: t('statusOverdue'),
        detail: t('overdueByMiles', { miles: Math.abs(remaining).toLocaleString() }),
        progress: 100
      };
    } else if (remaining <= 1000) {
      return {
        badgeClass: 'warning',
        badgeText: t('statusDueSoon'),
        detail: t('dueInMiles', { miles: remaining.toLocaleString() }),
        progress: progressPct
      };
    } else {
      return {
        badgeClass: '',
        badgeText: t('statusUpToDate'),
        detail: t('dueInMiles', { miles: remaining.toLocaleString() }),
        progress: progressPct
      };
    }
  }

  // --- RENDERING ---
  function render() {
    applyLanguage();

    // 1. Vehicle card
    const v = state.vehicle;
    document.getElementById('carName').textContent = `${v.make || ''} ${v.model || ''}`.trim() || 'Mi Vehículo';
    document.getElementById('carYear').textContent = v.year || '';
    document.getElementById('carVin').textContent = v.vin ? v.vin.toUpperCase() : '--';
    document.getElementById('carMileage').textContent = `${Number(v.mileage || 0).toLocaleString()} mi`;

    // 2. Health Badges (Oil & Tires)
    const oilHealth = calculateServiceHealth('oil', 5000);
    const oilBadge = document.getElementById('oilBadge');
    oilBadge.className = `status-badge ${oilHealth.badgeClass}`.trim();
    oilBadge.textContent = oilHealth.badgeText;
    document.getElementById('oilDetail').textContent = oilHealth.detail;
    document.getElementById('oilProgress').style.width = `${oilHealth.progress}%`;

    const tireHealth = calculateServiceHealth('tires', 6000);
    const tireBadge = document.getElementById('tireBadge');
    tireBadge.className = `status-badge ${tireHealth.badgeClass}`.trim();
    tireBadge.textContent = tireHealth.badgeText;
    document.getElementById('tireDetail').textContent = tireHealth.detail;
    document.getElementById('tireProgress').style.width = `${tireHealth.progress}%`;

    // 3. Fuel Stats
    const stats = calculateFuelStats();
    document.getElementById('summaryAvgMpg').textContent = stats.avgMpg;
    document.getElementById('summaryAvgGpm').textContent = stats.avgGpm;
    document.getElementById('statAvgMpg').textContent = stats.avgMpg;
    document.getElementById('statAvgGpm').textContent = stats.avgGpm;
    document.getElementById('statTotalGallons').textContent = stats.totalGallons;

    // 4. Maintenance List & Dashboard Preview
    renderMaintenanceList();
    renderRecentMaintenancePreview();

    // 5. Fuel List & Dashboard Preview
    renderFuelList();
    renderRecentFuelPreview();
  }

  function getServiceTypeName(type) {
    switch (type) {
      case 'oil': return t('serviceOil');
      case 'tires': return t('serviceTires');
      case 'brakes': return t('serviceBrakes');
      case 'battery': return t('serviceBattery');
      case 'filters': return t('serviceFilters');
      case 'general': return t('serviceGeneral');
      default: return t('serviceOther');
    }
  }

  // Dashboard preview of recent services
  function renderRecentMaintenancePreview() {
    const previewEl = document.getElementById('recentMaintenancePreview');
    if (!previewEl) return;

    const sorted = [...state.maintenance].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 2);

    if (sorted.length === 0) {
      previewEl.innerHTML = `<p style="color:var(--text-dim);font-size:0.85rem;padding:8px 4px;">${t('noRecordsYet')}</p>`;
      return;
    }

    previewEl.innerHTML = sorted.map((item) => {
      const typeClass = ['oil', 'tires', 'brakes'].includes(item.type) ? item.type : 'other';
      const costDisplay = item.cost ? `$${Number(item.cost).toFixed(2)}` : '--';
      return `
        <div class="item-card" style="padding:10px 12px;margin-bottom:6px;">
          <div class="item-card-header">
            <span class="item-tag ${typeClass}">${getServiceTypeName(item.type)}</span>
            <span class="item-date">${item.date || ''}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--text-muted);margin-top:4px;">
            <span>${Number(item.mileage || 0).toLocaleString()} mi</span>
            <span style="font-weight:700;color:var(--text-main);">${costDisplay}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // Dashboard preview of recent fuel fill-ups
  function renderRecentFuelPreview() {
    const previewEl = document.getElementById('recentFuelPreview');
    if (!previewEl) return;

    const processed = processFuelLogs().slice(0, 2);

    if (processed.length === 0) {
      previewEl.innerHTML = `<p style="color:var(--text-dim);font-size:0.85rem;padding:8px 4px;">${t('noRecordsYet')}</p>`;
      return;
    }

    previewEl.innerHTML = processed.map((log) => {
      const mpgText = log.mpg ? `${log.mpg.toFixed(1)} MPG` : `${log.gallons} gal`;
      const costText = log.cost ? `$${Number(log.cost).toFixed(2)}` : '--';
      return `
        <div class="item-card" style="padding:10px 12px;margin-bottom:6px;">
          <div class="item-card-header">
            <span class="item-tag fuel">⛽ ${log.gallons} gal</span>
            <span class="status-badge">${mpgText}</span>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:0.85rem;color:var(--text-muted);margin-top:4px;">
            <span>${Number(log.mileage || 0).toLocaleString()} mi (${log.date})</span>
            <span style="font-weight:700;color:var(--text-main);">${costText}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderMaintenanceList() {
    const listEl = document.getElementById('maintenanceList');
    if (!listEl) return;
    const filter = document.getElementById('maintFilter').value;

    const filtered = state.maintenance
      .filter((m) => filter === 'all' || m.type === filter)
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    if (filtered.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">🛠️</div>
          <p>${t('noRecordsYet')}</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = filtered.map((item) => {
      const typeClass = ['oil', 'tires', 'brakes'].includes(item.type) ? item.type : 'other';
      const costDisplay = item.cost ? `$${Number(item.cost).toFixed(2)}` : '--';
      const nextInterval = item.interval ? `+${Number(item.interval).toLocaleString()} mi` : '--';

      return `
        <div class="item-card" data-id="${item.id}">
          <div class="item-card-header">
            <div class="item-badge-title">
              <span class="item-tag ${typeClass}">${getServiceTypeName(item.type)}</span>
            </div>
            <span class="item-date">${item.date || ''}</span>
          </div>
          <div class="item-stats-grid">
            <div class="item-stat-unit">
              <span class="item-stat-lbl">${t('odometerLabel')}</span>
              <span class="item-stat-val">${Number(item.mileage || 0).toLocaleString()} mi</span>
            </div>
            <div class="item-stat-unit">
              <span class="item-stat-lbl">${t('nextServiceIntervalLabel')}</span>
              <span class="item-stat-val">${nextInterval}</span>
            </div>
            <div class="item-stat-unit">
              <span class="item-stat-lbl">${t('costLabel')}</span>
              <span class="item-stat-val">${costDisplay}</span>
            </div>
          </div>
          ${item.notes ? `<div class="item-notes">"${escapeHtml(item.notes)}"</div>` : ''}
          <div class="item-card-footer">
            <button class="btn-card-action edit-maint-btn" data-id="${item.id}">✏️</button>
            <button class="btn-card-action danger del-maint-btn" data-id="${item.id}">🗑️</button>
          </div>
        </div>
      `;
    }).join('');

    // Attach edit and delete listeners
    listEl.querySelectorAll('.edit-maint-btn').forEach((btn) => {
      btn.addEventListener('click', () => openEditMaintenance(btn.dataset.id));
    });
    listEl.querySelectorAll('.del-maint-btn').forEach((btn) => {
      btn.addEventListener('click', () => deleteMaintenance(btn.dataset.id));
    });
  }

  function renderFuelList() {
    const listEl = document.getElementById('fuelList');
    if (!listEl) return;
    const logs = processFuelLogs();

    if (logs.length === 0) {
      listEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">⛽</div>
          <p>${t('noRecordsYet')}</p>
        </div>
      `;
      return;
    }

    listEl.innerHTML = logs.map((log) => {
      const mpgText = log.mpg ? `${log.mpg.toFixed(1)} MPG` : '--';
      const gpmText = log.gpm ? `${log.gpm.toFixed(3)} gal/mi` : '--';
      const costText = log.cost ? `$${Number(log.cost).toFixed(2)}` : '--';

      return `
        <div class="item-card" data-id="${log.id}">
          <div class="item-card-header">
            <div class="item-badge-title">
              <span class="item-tag fuel">⛽ ${log.gallons} gal</span>
              ${log.mpg ? `<span class="status-badge">${mpgText}</span>` : ''}
            </div>
            <span class="item-date">${log.date || ''}</span>
          </div>
          <div class="item-stats-grid">
            <div class="item-stat-unit">
              <span class="item-stat-lbl">${t('odometerLabel')}</span>
              <span class="item-stat-val">${Number(log.mileage || 0).toLocaleString()} mi</span>
            </div>
            <div class="item-stat-unit">
              <span class="item-stat-lbl">${t('galPerMile')}</span>
              <span class="item-stat-val">${gpmText}</span>
            </div>
            <div class="item-stat-unit">
              <span class="item-stat-lbl">${t('costLabel')}</span>
              <span class="item-stat-val">${costText}</span>
            </div>
          </div>
          ${log.notes ? `<div class="item-notes">"${escapeHtml(log.notes)}"</div>` : ''}
          <div class="item-card-footer">
            <button class="btn-card-action edit-fuel-btn" data-id="${log.id}">✏️</button>
            <button class="btn-card-action danger del-fuel-btn" data-id="${log.id}">🗑️</button>
          </div>
        </div>
      `;
    }).join('');

    // Attach listeners
    listEl.querySelectorAll('.edit-fuel-btn').forEach((btn) => {
      btn.addEventListener('click', () => openEditFuel(btn.dataset.id));
    });
    listEl.querySelectorAll('.del-fuel-btn').forEach((btn) => {
      btn.addEventListener('click', () => deleteFuel(btn.dataset.id));
    });
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>'"]/g, (tag) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag));
  }

  // --- MODAL HELPERS ---
  function openModal(modalId) {
    const dialog = document.getElementById(modalId);
    if (dialog && typeof dialog.showModal === 'function') {
      dialog.showModal();
    }
  }

  function closeModal(modalId) {
    const dialog = document.getElementById(modalId);
    if (dialog && typeof dialog.close === 'function') {
      dialog.close();
    }
  }

  function initModals() {
    document.querySelectorAll('[data-close-modal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        closeModal(btn.getAttribute('data-close-modal'));
      });
    });

    // Close on backdrop click
    document.querySelectorAll('dialog').forEach((dialog) => {
      dialog.addEventListener('click', (e) => {
        const rect = dialog.getBoundingClientRect();
        const isInDialog = (
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          dialog.close();
        }
      });
    });
  }

  // --- FORMS & ACTIONS ---

  // 1. Quick Odometer Form
  const quickForm = document.getElementById('quickMileageForm');
  quickForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newMiles = Number(document.getElementById('quickMileageInput').value);
    if (newMiles > 0) {
      state.vehicle.mileage = newMiles;
      saveState();
      quickForm.reset();
      showToast('Odometer updated!');
    }
  });

  // 2. Edit Vehicle
  const editVehicleBtn = document.getElementById('editVehicleBtn');
  editVehicleBtn.addEventListener('click', () => {
    const v = state.vehicle;
    document.getElementById('carMakeInput').value = v.make || '';
    document.getElementById('carModelInput').value = v.model || '';
    document.getElementById('carYearInput').value = v.year || '';
    document.getElementById('carMileageInput').value = v.mileage || '';
    document.getElementById('carVinInput').value = v.vin || '';
    openModal('vehicleModal');
  });

  const vehicleForm = document.getElementById('vehicleForm');
  vehicleForm.addEventListener('submit', (e) => {
    e.preventDefault();
    state.vehicle.make = document.getElementById('carMakeInput').value.trim();
    state.vehicle.model = document.getElementById('carModelInput').value.trim();
    state.vehicle.year = Number(document.getElementById('carYearInput').value) || 2022;
    state.vehicle.mileage = Number(document.getElementById('carMileageInput').value) || 0;
    state.vehicle.vin = document.getElementById('carVinInput').value.trim();
    saveState();
    closeModal('vehicleModal');
    showToast(t('saveBtn') + ' ✓');
  });

  // 3. Maintenance Form
  const addMaintBtn = document.getElementById('addMaintBtn');
  addMaintBtn.addEventListener('click', () => {
    document.getElementById('maintForm').reset();
    document.getElementById('maintEditId').value = '';
    document.getElementById('maintModalTitle').textContent = t('newServiceTitle');
    document.getElementById('maintDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('maintMileage').value = state.vehicle.mileage || '';
    document.getElementById('maintInterval').value = 5000;
    openModal('maintModal');
  });

  document.getElementById('maintType').addEventListener('change', (e) => {
    const intervalInput = document.getElementById('maintInterval');
    if (e.target.value === 'oil') {
      intervalInput.value = 5000;
    } else if (e.target.value === 'tires') {
      intervalInput.value = 6000;
    } else if (e.target.value === 'brakes') {
      intervalInput.value = 25000;
    }
  });

  const maintForm = document.getElementById('maintForm');
  maintForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('maintEditId').value;
    const type = document.getElementById('maintType').value;
    const date = document.getElementById('maintDate').value;
    const mileage = Number(document.getElementById('maintMileage').value) || 0;
    const interval = Number(document.getElementById('maintInterval').value) || 0;
    const cost = document.getElementById('maintCost').value ? Number(document.getElementById('maintCost').value) : null;
    const notes = document.getElementById('maintNotes').value.trim();

    if (editId) {
      const idx = state.maintenance.findIndex((m) => m.id === editId);
      if (idx !== -1) {
        state.maintenance[idx] = { id: editId, type, date, mileage, interval, cost, notes };
      }
    } else {
      const newRecord = {
        id: 'm_' + Date.now(),
        type,
        date,
        mileage,
        interval,
        cost,
        notes
      };
      state.maintenance.push(newRecord);

      // Auto update vehicle odometer if service was at higher mileage
      if (mileage > (state.vehicle.mileage || 0)) {
        state.vehicle.mileage = mileage;
      }
    }

    saveState();
    closeModal('maintModal');
    showToast(t('saveBtn') + ' ✓');
  });

  function openEditMaintenance(id) {
    const record = state.maintenance.find((m) => m.id === id);
    if (!record) return;

    document.getElementById('maintEditId').value = record.id;
    document.getElementById('maintModalTitle').textContent = t('editServiceTitle');
    document.getElementById('maintType').value = record.type;
    document.getElementById('maintDate').value = record.date;
    document.getElementById('maintMileage').value = record.mileage;
    document.getElementById('maintInterval').value = record.interval || '';
    document.getElementById('maintCost').value = record.cost || '';
    document.getElementById('maintNotes').value = record.notes || '';
    openModal('maintModal');
  }

  function deleteMaintenance(id) {
    if (confirm(t('deleteConfirm'))) {
      state.maintenance = state.maintenance.filter((m) => m.id !== id);
      saveState();
    }
  }

  document.getElementById('maintFilter').addEventListener('change', renderMaintenanceList);

  // 4. Fuel Form
  const addFuelBtn = document.getElementById('addFuelBtn');
  addFuelBtn.addEventListener('click', () => {
    document.getElementById('fuelForm').reset();
    document.getElementById('fuelEditId').value = '';
    document.getElementById('fuelModalTitle').textContent = t('newFuelTitle');
    document.getElementById('fuelDate').value = new Date().toISOString().split('T')[0];
    document.getElementById('fuelMileage').value = state.vehicle.mileage || '';
    openModal('fuelModal');
  });

  const fuelForm = document.getElementById('fuelForm');
  fuelForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const editId = document.getElementById('fuelEditId').value;
    const date = document.getElementById('fuelDate').value;
    const mileage = Number(document.getElementById('fuelMileage').value) || 0;
    const gallons = Number(document.getElementById('fuelGallons').value) || 0;
    const cost = document.getElementById('fuelCost').value ? Number(document.getElementById('fuelCost').value) : null;
    const notes = document.getElementById('fuelNotes').value.trim();

    if (editId) {
      const idx = state.fuel.findIndex((f) => f.id === editId);
      if (idx !== -1) {
        state.fuel[idx] = { id: editId, date, mileage, gallons, cost, notes };
      }
    } else {
      const newLog = {
        id: 'f_' + Date.now(),
        date,
        mileage,
        gallons,
        cost,
        notes
      };
      state.fuel.push(newLog);

      // Auto bump vehicle odometer
      if (mileage > (state.vehicle.mileage || 0)) {
        state.vehicle.mileage = mileage;
      }
    }

    saveState();
    closeModal('fuelModal');
    showToast(t('saveBtn') + ' ✓');
  });

  function openEditFuel(id) {
    const log = state.fuel.find((f) => f.id === id);
    if (!log) return;

    document.getElementById('fuelEditId').value = log.id;
    document.getElementById('fuelModalTitle').textContent = t('editFuelTitle');
    document.getElementById('fuelDate').value = log.date;
    document.getElementById('fuelMileage').value = log.mileage;
    document.getElementById('fuelGallons').value = log.gallons;
    document.getElementById('fuelCost').value = log.cost || '';
    document.getElementById('fuelNotes').value = log.notes || '';
    openModal('fuelModal');
  }

  function deleteFuel(id) {
    if (confirm(t('deleteConfirm'))) {
      state.fuel = state.fuel.filter((f) => f.id !== id);
      saveState();
    }
  }

  // --- BACKUP & EXPORT ---
  function downloadFile(content, fileName, contentType) {
    const a = document.createElement('a');
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(a.href);
  }

  // Export JSON Backup
  document.getElementById('exportBackupBtn').addEventListener('click', () => {
    const jsonStr = JSON.stringify(state, null, 2);
    const dateStr = new Date().toISOString().split('T')[0];
    downloadFile(jsonStr, `AutoTracker_Backup_${dateStr}.json`, 'application/json');
  });

  // Restore JSON Backup
  document.getElementById('importFileInput').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const imported = JSON.parse(evt.target.result);
        if (imported && (imported.vehicle || imported.maintenance || imported.fuel)) {
          state = Object.assign({}, defaultState, imported);
          saveState();
          showToast(t('importedSuccess'));
          switchTab('tab-vehicle');
        } else {
          alert(t('invalidFile'));
        }
      } catch (err) {
        alert(t('invalidFile'));
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  });

  // Export to CSV
  document.getElementById('exportCsvBtn').addEventListener('click', () => {
    let csv = `VEHICULO: ${state.vehicle.year} ${state.vehicle.make} ${state.vehicle.model} (VIN: ${state.vehicle.vin})\n\n`;
    
    // Maintenance CSV section
    csv += '--- MANTENIMIENTOS Y SERVICIOS ---\n';
    csv += 'ID,Fecha,Tipo,Millas,Proximo_En_Millas,Costo,Notas\n';
    state.maintenance.forEach((m) => {
      csv += `"${m.id}","${m.date}","${m.type}","${m.mileage}","${m.interval || ''}","${m.cost || ''}","${(m.notes || '').replace(/"/g, '""')}"\n`;
    });

    // Fuel CSV section
    csv += '\n--- REGISTRO DE GASOLINA Y CONSUMO ---\n';
    csv += 'ID,Fecha,Odometro_Millas,Galones,Costo,Notas\n';
    state.fuel.forEach((f) => {
      csv += `"${f.id}","${f.date}","${f.mileage}","${f.gallons}","${f.cost || ''}","${(f.notes || '').replace(/"/g, '""')}"\n`;
    });

    const dateStr = new Date().toISOString().split('T')[0];
    downloadFile(csv, `AutoTracker_Datos_${dateStr}.csv`, 'text/csv;charset=utf-8;');
  });

  // Load Sample Data (Auto-switches to vehicle dashboard and displays toast)
  document.getElementById('loadSampleDataBtn').addEventListener('click', () => {
    state = JSON.parse(JSON.stringify(defaultState));
    saveState();
    showToast(t('sampleLoaded'));
    switchTab('tab-vehicle');
  });

  // Clear All Data
  document.getElementById('clearAllDataBtn').addEventListener('click', () => {
    if (confirm(t('clearConfirm'))) {
      state = {
        lang: state.lang,
        vehicle: { make: '', model: '', year: '', vin: '', mileage: 0 },
        maintenance: [],
        fuel: []
      };
      saveState();
      switchTab('tab-vehicle');
    }
  });

  // Language toggle listener
  document.getElementById('langToggleBtn').addEventListener('click', toggleLanguage);

  // Modern Web Guidance: Keep aria-invalid in sync with :user-invalid
  const syncAria = (el) => {
    if (el && el.matches) {
      el.setAttribute('aria-invalid', el.matches(':user-invalid') ? 'true' : 'false');
    }
  };
  document.addEventListener('blur', (e) => syncAria(e.target), true);
  document.addEventListener('input', (e) => {
    if (e.target && e.target.hasAttribute && e.target.hasAttribute('aria-invalid')) {
      syncAria(e.target);
    }
  });

  // Service Worker Registration for Android PWA (Only in http/https)
  if ('serviceWorker' in navigator && (window.location.protocol === 'http:' || window.location.protocol === 'https:')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((err) => {
        console.log('SW registration skipped:', err);
      });
    });
  }

  // --- INIT ---
  initTabs();
  initModals();
  render();
})();
