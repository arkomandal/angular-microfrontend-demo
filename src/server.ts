import { initNodeFederation } from '@softarc/native-federation-node';

(async () => {
  try {
    await initNodeFederation({
      relBundlePath: '../browser/'
    });
  } catch (err) {
    // In dev mode the host's remoteEntry.json may not yet exist when the SSR
    // server starts.  We ignore file-not-found errors and continue; the
    // federation runtime will reload once the file is generated.
    const e = err as any;
    if (e && e.code !== 'ENOENT') {
      console.error('initNodeFederation failed:', err);
    }
  }

  await import('./bootstrap-server');

})();
