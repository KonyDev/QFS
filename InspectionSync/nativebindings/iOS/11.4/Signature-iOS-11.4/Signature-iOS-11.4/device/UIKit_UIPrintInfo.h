#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPrintInfo_symbols(JSContext*);
@protocol UIPrintInfoInstanceExports<JSExport, NSCopyingInstanceExports_, NSCodingInstanceExports_>
@property (copy,nonatomic) NSString * printerID;
@property (nonatomic) UIPrintInfoOrientation orientation;
@property (nonatomic) UIPrintInfoDuplex duplex;
@property (readonly,nonatomic) NSDictionary * dictionaryRepresentation;
@property (nonatomic) UIPrintInfoOutputType outputType;
@property (copy,nonatomic) NSString * jobName;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
@end
@protocol UIPrintInfoClassExports<JSExport, NSCopyingClassExports_, NSCodingClassExports_>
+(UIPrintInfo *) printInfo;
+(UIPrintInfo *) printInfoWithDictionary: (NSDictionary *) dictionary ;
@end
#pragma clang diagnostic pop