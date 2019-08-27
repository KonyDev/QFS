#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIDetector_symbols(JSContext*);
@protocol CIDetectorInstanceExports<JSExport>
-(NSArray *) featuresInImage: (CIImage *) image ;
-(NSArray *) featuresInImage: (CIImage *) image options: (NSDictionary *) options ;
@end
@protocol CIDetectorClassExports<JSExport>
+(CIDetector *) detectorOfType: (NSString *) type context: (CIContext *) context options: (NSDictionary *) options ;
@end
#pragma clang diagnostic pop