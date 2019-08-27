#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIRAWFilter_symbols(JSContext*);
@protocol CIFilterCIRAWFilterCategoryInstanceExports<JSExport>
@end
@protocol CIFilterCIRAWFilterCategoryClassExports<JSExport>
+(CIFilter *) filterWithImageData: (NSData *) data options: (NSDictionary *) options ;
+(CIFilter *) filterWithCVPixelBuffer: (id) pixelBuffer properties: (NSDictionary *) properties options: (NSDictionary *) options ;
+(CIFilter *) filterWithImageURL: (NSURL *) url options: (NSDictionary *) options ;
@end
#pragma clang diagnostic pop