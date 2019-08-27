#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIImageProvider_symbols(JSContext*);
@protocol CIImageCIImageProviderCategoryInstanceExports<JSExport>
JSExportAs(initWithImageProviderSizeFormatColorSpaceOptions,
-(id) jsinitWithImageProvider: (id) p size: (size_t) width : (size_t) height format: (CIFormat) f colorSpace: (id) cs options: (NSDictionary *) options );
@end
@protocol CIImageCIImageProviderCategoryClassExports<JSExport>
+(CIImage *) imageWithImageProvider: (id) p size: (size_t) width : (size_t) height format: (CIFormat) f colorSpace: (id) cs options: (NSDictionary *) options ;
@end
@protocol NSObjectCIImageProviderCategoryInstanceExports<JSExport>
@end
@protocol NSObjectCIImageProviderCategoryClassExports<JSExport>
@end
#pragma clang diagnostic pop