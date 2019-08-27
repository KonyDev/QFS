#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreImage_CIFilter_symbols(JSContext*);
@protocol CIFilterInstanceExports<JSExport, NSSecureCodingInstanceExports_, NSCopyingInstanceExports_>
@property (readonly,nonatomic) NSDictionary * attributes;
@property (readonly,nonatomic) NSArray * inputKeys;
@property (readonly,nonatomic) NSArray * outputKeys;
@property (readonly,nonatomic) CIImage * outputImage;
@property (copy,nonatomic) NSString * name;
-(NSString *) name;
-(void) setName: (NSString *) aString ;
-(void) setDefaults;
@end
@protocol CIFilterClassExports<JSExport, NSSecureCodingClassExports_, NSCopyingClassExports_>
@end
@protocol CIFilterCIFilterXMPSerializationCategoryInstanceExports<JSExport>
@end
@protocol CIFilterCIFilterXMPSerializationCategoryClassExports<JSExport>
+(NSData *) serializedXMPFromFilters: (NSArray *) filters inputImageExtent: (CGRect) extent ;
JSExportAs(filterArrayFromSerializedXMPInputImageExtentError,
+(NSArray *) jsfilterArrayFromSerializedXMP: (NSData *) xmpData inputImageExtent: (CGRect) extent error: (JSValue *) outError );
@end
@protocol CIFilterCIFilterRegistryCategoryInstanceExports<JSExport>
@end
@protocol CIFilterCIFilterRegistryCategoryClassExports<JSExport>
+(NSArray *) filterNamesInCategory: (NSString *) category ;
+(NSString *) localizedDescriptionForFilterName: (NSString *) filterName ;
+(CIFilter *) filterWithName: (NSString *) name ;
+(NSURL *) localizedReferenceDocumentationForFilterName: (NSString *) filterName ;
+(NSString *) localizedNameForCategory: (NSString *) category ;
+(CIFilter *) filterWithName: (NSString *) name withInputParameters: (NSDictionary *) params ;
+(void) registerFilterName: (NSString *) name constructor: (id) anObject classAttributes: (NSDictionary *) attributes ;
JSExportAs(filterWithNameKeysAndValues,
+(CIFilter *) jsfilterWithName: (NSString *) name keysAndValues: (id) key0 arguments: (NSArray *) args );
+(NSString *) localizedNameForFilterName: (NSString *) filterName ;
+(NSArray *) filterNamesInCategories: (NSArray *) categories ;
@end
#pragma clang diagnostic pop