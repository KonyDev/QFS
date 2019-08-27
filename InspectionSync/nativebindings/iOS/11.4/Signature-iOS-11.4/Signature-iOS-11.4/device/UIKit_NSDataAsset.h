#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_NSDataAsset_symbols(JSContext*);
@protocol NSDataAssetInstanceExports<JSExport, NSCopyingInstanceExports_>
@property (readonly,copy,nonatomic) NSData * data;
@property (readonly,copy,nonatomic) NSString * name;
@property (readonly,copy,nonatomic) NSString * typeIdentifier;
JSExportAs(initWithName,
-(id) jsinitWithName: (NSString *) name );
JSExportAs(initWithNameBundle,
-(id) jsinitWithName: (NSString *) name bundle: (NSBundle *) bundle );
@end
@protocol NSDataAssetClassExports<JSExport, NSCopyingClassExports_>
@end
#pragma clang diagnostic pop